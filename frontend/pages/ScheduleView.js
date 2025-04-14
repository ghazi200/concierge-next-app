import React from "react";

const ScheduleView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Schedule</Text>
      <Calendar
        markedDates={{
          "2025-03-01": { selected: true, marked: true, selectedColor: "blue" },
          "2025-03-05": { marked: true },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});

export default ScheduleView;
