import 'package:flutter/material.dart';
import 'src/app.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'src/data.dart';

void main() async {
  await Hive.initFlutter();
  for (Medication med in medications) {
    await Hive.openBox(med.name);
  }
  runApp(const MyApp());
}
