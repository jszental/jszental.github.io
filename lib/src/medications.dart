import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'dart:async';
import 'data.dart';
import 'adminchip.dart';
import 'progressindicator.dart';
import 'box.dart';

class MedicationPage extends StatefulWidget {
  const MedicationPage({super.key});

  @override
  State<MedicationPage> createState() => _MedicationPageState();
}

class _MedicationPageState extends State<MedicationPage> {
  String currentTime = DateFormat('HH:mm:ss').format(DateTime.now());
  Timer? timer;

  @override
  void initState() {
    super.initState();
    timer =
        Timer.periodic(const Duration(seconds: 1), (Timer t) => _updateTime());
  }

  void _updateTime() {
    setState(() => currentTime = DateFormat('HH:mm:ss').format(DateTime.now()));
  }

  @override
  void dispose() {
    timer?.cancel(); // Cancel the timer when the widget is disposed
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    DateTime now = DateTime.now();
    return Scaffold(
        backgroundColor: Colors.blueGrey.shade50,
        appBar: AppBar(
            title: const Text('Medication Administration'),
            backgroundColor: Colors.blueGrey.shade50),
        body: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Center(
              child: Text(DateFormat('h:mm a').format(now),
                  style: Theme.of(context).textTheme.displayMedium)),
          const SizedBox(height: 20),
          const Divider(),
          const SizedBox(height: 20),
          Expanded(
              child: ListView.builder(
                  shrinkWrap: true,
                  itemCount: medications.length,
                  itemBuilder: (context, index) {
                    Medication med = medications[index];
                    return Padding(
                      padding: const EdgeInsets.all(10),
                      child: Card(
                          color: Colors.white,
                          child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                ListTile(
                                    title: Text(med.name),
                                    subtitle: Text(med.dosingInterval()),
                                    trailing: ElevatedButton(
                                        style: ElevatedButton.styleFrom(
                                            backgroundColor: med.readyForAdmin()
                                                ? Colors.blue
                                                : Colors.grey),
                                        onPressed: med.readyForAdmin()
                                            ? () => administerMedication(
                                                medications[index])
                                            : null,
                                        child: Text(med.readyForAdmin()
                                            ? 'Give Now'
                                            : 'Wait'))),
                                MyProgressIndicator(medication: med),
                                Wrap(
                                    alignment: WrapAlignment.start,
                                    children: List.generate(
                                        med.adminTimes().length,
                                        (i) => AdminChip(
                                            datetime: med.adminTimes()[i],
                                            onClick: () => setState(() =>
                                                removeAdministration(med,
                                                    med.adminTimes()[i]))))),
                              ])),
                    );
                  })),
        ]));
  }

  void administerMedication(Medication medication) async {
    DateTime now = DateTime.now();

    TimeOfDay? pickedTime = await showTimePicker(
      context: context,
      initialTime: TimeOfDay.fromDateTime(now),
      initialEntryMode: TimePickerEntryMode.input,
    );

    // If user cancels the time picker, exit the function without administering
    if (pickedTime == null) return;

    DateTime pickedDateTime = DateTime(
        now.year, now.month, now.day, pickedTime.hour, pickedTime.minute);

    // Adjust the date if the picked time is in the future
    if (pickedDateTime.isAfter(now)) {
      pickedDateTime = pickedDateTime.subtract(const Duration(days: 1));
    }

    // If this date is before the last administration time, check
    if (medication.lastAdminTime() != null &&
        pickedDateTime.isBefore(medication.lastAdminTime()!)) {
      // Check
      if (context.mounted) {
        bool? confirmTime = await showDialog<bool>(
            context: context,
            builder: (context) => AlertDialog(
                    title: const Text('Time Confirmation'),
                    content: Text(
                        'This time is before the last administration time of $medication. Are you sure this administration time is correct?'),
                    actions: <Widget>[
                      TextButton(
                          onPressed: () => Navigator.of(context).pop(true),
                          child: const Text('Yes')),
                      TextButton(
                          onPressed: () => Navigator.of(context).pop(false),
                          child: const Text('No')),
                    ]));

// If the user does not confirm the time, return to exit the function.
        if (confirmTime == null || !confirmTime) return;
      }
    }

    // Store the valid picked time
    setState(() => addAdministration(medication, pickedDateTime));
  }
}
