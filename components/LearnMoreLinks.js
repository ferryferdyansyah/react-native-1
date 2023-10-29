/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import type {Node} from 'react';

import TouchableOpacity from '../../Components/Touchable/TouchableOpacity';
import View from '../../Components/View/View';
import openURLInBrowser from '../../Core/Devtools/openURLInBrowser';
import StyleSheet from '../../StyleSheet/StyleSheet';
import Text from '../../Text/Text';
import useColorScheme from '../../Utilities/useColorScheme';
import Colors from './Colors';
import React, {Fragment} from 'react';
import { Linking } from 'react-native';

const links = [
  {
    id: 1,
    title: 'Instagram',
    link: 'https://reactnative.dev/docs/tutorial',
    description: '@ferryferdyansyah002',
  },
  {
    id: 2,
    title: 'LinkedIn',
    link: 'https://reactnative.dev/docs/style',
    description:
      'Ferry Ferdyansyah',
  },
  {
    id: 3,
    title: 'Facebook',
    link: 'https://reactnative.dev/docs/flexbox',
    description: 'Gapunya',
  },
  {
    id: 4,
    title: 'Twitter',
    link: 'https://reactnative.dev/docs/components-and-apis',
    description: 'Gapunya',
  },
  {
    id: 5,
    title: 'Github',
    link: 'https://reactnative.dev/docs/navigation',
    description:
      'ferryferdyansyah002',
  },
  {
    id: 6,
    title: 'Address',
    link: 'google.navigation:q=-7.775048141274232, 110.37464021700158',
    description: 'How to use the Fetch API in React Native.',
  },
];

const LinkList = (): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      {links.map(({id, title, link, description}) => (
        <Fragment key={id}>
          <View
            style={[
              styles.separator,
              {
                backgroundColor: isDarkMode ? Colors.dark : Colors.light,
              },
            ]}
          />
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => Linking.openURL(link)}
            style={styles.linkContainer}>
            <Text style={styles.link}>{title}</Text>
            <Text
              style={[
                styles.description,
                {
                  color: isDarkMode ? Colors.lighter : Colors.dark,
                },
              ]}>
              {description}
            </Text>
          </TouchableOpacity>
        </Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -32,
    paddingHorizontal: 28,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
  },
});

export default LinkList;
