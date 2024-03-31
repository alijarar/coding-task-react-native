import React from 'react';
import { View, Image, KeyboardAvoidingView, StyleSheet, Platform, ScrollView } from 'react-native';
import FooterImage from "../../assets/images/footer.png";
interface BottomImageScreenProps {}

const BottomImageScreen: React.FC<BottomImageScreenProps> = ({ children }:any) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          {children}
        </View>
        <View style={styles.bottomContainer}>
          <Image
            source={FooterImage}
            style={styles.bottomImage}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  bottomImage: {
    width: '100%',
    height: Platform.OS === 'ios'? 50: 43,
  },
});

export default BottomImageScreen;


// import React from 'react';
// import { View, Image, KeyboardAvoidingView, StyleSheet, Platform, ScrollView } from 'react-native';
// import FooterImage from "../../assets/images/footer.png";

// interface BottomImageScreenProps {}

// const BottomImageScreen: React.FC<BottomImageScreenProps> = ({ children }:any) => {
//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//         <View style={{ flex: 1 }}>
//           {children}
//           <View style={styles.bottomContainer}>
//             <Image
//               source={FooterImage} // Change this to your image path
//               style={styles.bottomImage}
//               resizeMode="contain"
//             />
//           </View>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   bottomContainer: {
//     alignItems: 'center',
//     paddingBottom: 10, // Adjust this value as needed
//     backgroundColor: 'transparent', // Adjust this if needed
//   },
//   bottomImage: {
//     width: '100%', // Adjust this value as needed
//     height: 100, // Adjust this value as needed
//   },
// });

// export default BottomImageScreen;
