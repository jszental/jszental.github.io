import 'package:flutter/material.dart';
import 'data.dart';
import 'package:intl/intl.dart';

class MyProgressIndicator extends StatelessWidget {
  final Medication medication;
  const MyProgressIndicator({super.key, required this.medication});

  @override
  Widget build(BuildContext context) {
    const Widget spacer = SizedBox(height: 10);

    DateTime now = DateTime.now();
    DateTime start = medication.lastAdminTime()!;
    DateTime min = medication.nextAdmin(minInterval: true);
    DateTime end = medication.nextAdmin();
    Duration length = end.difference(start);

    double percent = now.isAfter(end)
        ? 1
        : now.difference(start).inMinutes / length.inMinutes;
    int percentMinDose = (100 *
            (medication.recommendedDosingInterval -
                    medication.minDosingInterval)
                .inMinutes /
            length.inMinutes)
        .round();

    return Padding(
        padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 16),
        child: Column(
            children: medication.lastAdminTime() == null
                ? [
                    Container(
                        height: 4,
                        decoration: const ShapeDecoration(
                            color: Colors.green,
                            shape: RoundedRectangleBorder()))
                  ]
                : [
                    Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(DateFormat('h:mm a').format(start)),
                          Text(DateFormat('h:mm a').format(end)),
                        ]),
                    spacer,
                    Stack(
                        alignment: AlignmentDirectional.centerStart,
                        children: [
                          Row(children: [
                            Expanded(
                                flex: 100 - percentMinDose,
                                child: Container(
                                    height: 4,
                                    decoration: const ShapeDecoration(
                                        color: Colors.red,
                                        shape: RoundedRectangleBorder()))),
                            Expanded(
                                flex: percentMinDose,
                                child: Container(
                                    height: 4,
                                    decoration: const ShapeDecoration(
                                        color: Colors.orange,
                                        shape: RoundedRectangleBorder())))
                          ]),
                          Row(children: [
                            Expanded(
                                flex: (percent * 100).toInt(),
                                child: Container(
                                    height: 8,
                                    decoration: const ShapeDecoration(
                                        color: Colors.purple,
                                        shape: RoundedRectangleBorder()))),
                            Expanded(
                                flex: (100 * (1 - percent)).toInt(),
                                child: Container())
                          ]),
                          Row(children: [
                            Expanded(
                                flex: (percent * 100).toInt(),
                                child: Container()),
                            Container(
                                height: 15,
                                width: 15,
                                decoration: const ShapeDecoration(
                                    color: Colors.purple,
                                    shape: CircleBorder())),
                            Expanded(
                                flex: (100 * (1 - percent)).toInt(),
                                child: Container())
                          ])
                        ]),
                    spacer,
                    if (medication.untilNextAdmin(minInterval: true) >=
                        Duration.zero)
                      Text(
                          'Do not give ${medication.name} until ${DateFormat('h:mm a').format(medication.nextAdmin(minInterval: true))} at the earliest',
                          style: const TextStyle(color: Colors.red))
                  ]));
  }
}
