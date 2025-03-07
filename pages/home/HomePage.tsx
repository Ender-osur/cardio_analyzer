import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  View,
  ScrollView,
  Text,
} from "react-native";
import { AccordionItem } from "@/components/common/AccordionItem";
import { COLORS, FONTS, SPACING } from "@/constants/theme";
import type { ECGData } from "@/types/navigation";
import type { HomeStackNavigationProps } from '@/types/navigation';

interface HomePageProps {
  navigation: HomeStackNavigationProps;
}

interface FrequencyRangesProps {
  data: ECGData['frequencyRanges'];
}

interface MaxMinInfoProps {
  data: ECGData['maxMin'];
}

const FrequencyRanges: React.FC<FrequencyRangesProps> = ({ data }) => (
  <>
    {data.map((item, index) => (
      <View key={index} style={styles.frequencyItem}>
        <Text style={styles.frequencyText}>{item.range}</Text>
        <View style={styles.percentageBar}>
          <View 
            style={[
              styles.percentageFill, 
              { width: `${item.percentage}%` }
            ]} 
          />
        </View>
        <Text style={styles.percentageText}>{item.percentage}%</Text>
      </View>
    ))}
  </>
);

const MaxMinInfo: React.FC<MaxMinInfoProps> = ({ data }) => (
  <>
    <View style={styles.maxMinItem}>
      <Text style={styles.maxMinLabel}>Máximo:</Text>
      <Text style={styles.maxMinValue}>{data.max} bpm</Text>
    </View>
    <View style={styles.maxMinItem}>
      <Text style={styles.maxMinLabel}>Mínimo:</Text>
      <Text style={styles.maxMinValue}>{data.min} bpm</Text>
    </View>
    <Text style={styles.timestamp}>
      Registrado: {data.timestamp}
    </Text>
  </>
);

const ecgData: ECGData = {
  frequencyRanges: [
    { range: "60-80 bpm", percentage: 45 },
    { range: "81-100 bpm", percentage: 30 },
    { range: "101-120 bpm", percentage: 25 },
  ],
  maxMin: {
    max: 120,
    min: 58,
    timestamp: "2024-03-19 14:30:00",
  },
};

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>Datos ECG</Text>
          
          <AccordionItem title="Rangos de Frecuencia">
            <FrequencyRanges data={ecgData.frequencyRanges} />
          </AccordionItem>

          <AccordionItem title="Máximos y Mínimos">
            <MaxMinInfo data={ecgData.maxMin} />
          </AccordionItem>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
    padding: SPACING.md,
  },
  title: {
    ...FONTS.large,
    color: COLORS.white,
    marginBottom: SPACING.lg,
    textAlign: 'center',
  },
  frequencyItem: {
    marginVertical: 8,
  },
  frequencyText: {
    fontSize: 16,
    marginBottom: 5,
  },
  percentageBar: {
    height: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  percentageFill: {
    height: '100%',
    backgroundColor: '#38bfe1',
  },
  percentageText: {
    textAlign: 'right',
    marginTop: 5,
    color: '#666',
  },
  maxMinItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  maxMinLabel: {
    fontSize: 16,
    color: '#333',
  },
  maxMinValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#006072',
  },
  timestamp: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default HomePage;
