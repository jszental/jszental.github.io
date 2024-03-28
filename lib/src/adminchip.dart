import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class AdminChip extends StatelessWidget {
  final DateTime datetime;
  final void Function() onClick;
  const AdminChip({super.key, required this.datetime, required this.onClick});

  @override
  Widget build(BuildContext context) {
    DateTime now = DateTime.now();
    bool today = DateTime(datetime.year, datetime.month, datetime.day) ==
        DateTime(now.year, now.month, now.day);

    return Padding(
        padding: const EdgeInsets.all(4),
        child: Card(
            color: Colors.grey.shade800,
            child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Row(mainAxisSize: MainAxisSize.min, children: [
                  Column(children: [
                    Text(today ? 'TODAY' : 'YESTERDAY',
                        style: Theme.of(context)
                            .textTheme
                            .labelSmall!
                            .copyWith(color: Colors.white70)),
                    Text(DateFormat('h:mm a').format(datetime),
                        style: Theme.of(context).textTheme.bodySmall!.copyWith(
                            color: Colors.white, fontWeight: FontWeight.bold)),
                  ]),
                  const SizedBox(width: 8),
                  GestureDetector(
                      onTap: onClick,
                      child: const Icon(Icons.close,
                          size: 18, color: Colors.white38))
                ]))));
  }
}
