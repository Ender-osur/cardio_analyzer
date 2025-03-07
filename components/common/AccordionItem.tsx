import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet, LayoutChangeEvent, Easing } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING } from "@/constants/theme";
import type { AccordionItemProps } from '@/types/components';

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  initiallyOpen = false,
  style
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [contentMaxHeight, setContentMaxHeight] = useState(0);
  const animation = useRef(new Animated.Value(initiallyOpen ? 1 : 0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animation, {
        toValue: isOpen ? 1 : 0,
        duration: 200,
        easing: Easing.out(Easing.exp),
        useNativeDriver: false,
      })
    ]).start();
  }, [isOpen, contentMaxHeight]);

  const toggleListItem = () => {
    setIsOpen(!isOpen);
  };

  const arrowTransform = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });

  const containerHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentMaxHeight]
  });

  const headerBackgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.primary, COLORS.secondary]
  });

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setContentMaxHeight(height);
  };

  return (
    <View style={[styles.container, style]}>
      <Animated.View style={[
        styles.header,
        { backgroundColor: headerBackgroundColor }
      ]}>
        <TouchableOpacity 
          activeOpacity={0.7} 
          onPress={toggleListItem}
          style={styles.headerTouchable}
        >
          <Text style={styles.title}>{title}</Text>
          <Animated.View style={[
            styles.arrow,
            { transform: [{ rotate: arrowTransform }] }
          ]}>
            <Ionicons name="chevron-down" size={24} color={COLORS.white} />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
      
      <Animated.View style={[
        styles.contentContainer,
        {
          height: containerHeight,
        }
      ]}>
        <View style={styles.content} onLayout={onLayout}>
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
    overflow: 'hidden',
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.md,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
  },
  arrow: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    overflow: 'hidden',
  },
  content: {
    padding: SPACING.md,
  },
});
