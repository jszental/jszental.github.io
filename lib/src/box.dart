import 'package:hive_flutter/hive_flutter.dart';
import 'data.dart';

List<DateTime> getAdministration(Medication medication) {
  final box = Hive.box(medication.name);
  final adminTimesDynamic = box.get('adminTimes', defaultValue: <DateTime>[]);
  List<DateTime> adminTimes = adminTimesDynamic.cast<DateTime>();
  adminTimes
      .retainWhere((time) => DateTime.now().difference(time).inHours < 24);
  adminTimes.sort((a, b) => a.compareTo(b));
  return adminTimes.toSet().toList();
}

void addAdministration(Medication medication, DateTime setDateTime) {
  final box = Hive.box(medication.name);
  List<DateTime> adminTimes = getAdministration(medication);
  adminTimes.add(setDateTime);
  box.put('adminTimes', adminTimes);
}

void removeAdministration(Medication medication, DateTime dt) {
  List<DateTime> newList = getAdministration(medication);
  newList.remove(dt);
  Hive.box(medication.name).put('adminTimes', newList);
}
