import 'box.dart';

class Medication {
  String name;
  Duration minDosingInterval;
  Duration recommendedDosingInterval;
  int? maxDailyDoses;
  Medication(
      {required this.name,
      required this.minDosingInterval,
      required this.recommendedDosingInterval,
      this.maxDailyDoses});

  List<DateTime> adminTimes() => getAdministration(this);
  int numberDoses() => adminTimes().length;
  bool maxDoses() => numberDoses() == maxDailyDoses;

  DateTime? lastAdminTime() => adminTimes().isEmpty ? null : adminTimes().last;
  Duration sinceLastAdminTime() => lastAdminTime() == null
      ? const Duration(hours: 24)
      : DateTime.now().difference(lastAdminTime()!);

  DateTime nextAdmin({bool minInterval = false}) => maxDoses()
      ? adminTimes().first.add(const Duration(days: 1))
      : adminTimes()
          .last
          .add(minInterval ? minDosingInterval : recommendedDosingInterval);

  Duration untilNextAdmin({bool minInterval = false}) =>
      DateTime.now().isBefore(nextAdmin(minInterval: minInterval))
          ? nextAdmin(minInterval: minInterval).difference(DateTime.now())
          : Duration.zero;
  bool readyForAdmin() =>
      untilNextAdmin(minInterval: true) < const Duration(minutes: 10);

  String dosingInterval() {
    String formatInterval(Duration interval) {
      String str = interval.inHours.toStringAsFixed(1);
      return str.endsWith('.0') ? str.substring(0, str.length - 2) : str;
    }

    String minIntervalStr = formatInterval(minDosingInterval);
    String recommendedIntervalStr = formatInterval(recommendedDosingInterval);

    if (minDosingInterval == recommendedDosingInterval) {
      return 'Give every $minIntervalStr hours';
    } else {
      return 'Give every $minIntervalStr-$recommendedIntervalStr hours';
    }
  }
}

List<Medication> medications = [
  Medication(
      name: 'Paracetamol',
      minDosingInterval: const Duration(hours: 4),
      recommendedDosingInterval: const Duration(hours: 6),
      maxDailyDoses: 4),
  Medication(
      name: 'Ibuprofen',
      minDosingInterval: const Duration(hours: 4),
      recommendedDosingInterval: const Duration(hours: 8),
      maxDailyDoses: 3),
  Medication(
      name: 'Oxycodone',
      minDosingInterval: const Duration(hours: 2),
      recommendedDosingInterval: const Duration(hours: 4))
];
