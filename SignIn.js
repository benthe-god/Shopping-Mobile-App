import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, ImageBackground, Dimensions, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native';


const SignIn = ({navigation}) => {
  return (
     
    <ScrollView style = {{flex: 1,backgroundColor: '#ffff' }}
    showsVerticalScrollIndicator={false}>
    <ImageBackground
       source={require('../assets/wavy.jpg')}
       style={{
         height : Dimensions.get('window').height / 2.5,
       }}>
         
         <View style={StyleSheet.brandview}>
           <Icon name= 'location-sharp' style={{color: '#ffff', fontsize: 100}}/>
            <Text style={styles.breandviewText}>Shopping App</Text> 
         </View>
      </ImageBackground>

      <View style={styles.bottomView}>
        <View style={{padding: 40}}>
          <Text style={{color:'#4632A1', fontSize: 34}}>Welcome</Text>
          <Text>Don't have an account?</Text>
          <Text style={{color: 'red', fontStyle: 'italic'}}>
            {''} 
            Register now!</Text>

            <View style={{marginTop: 50}}>
              <Item floatingLabel style={{borderColor: '4632A1'}}>
                <label>Email</label>
                <Input value='design@test.com' keyboardType="email-address"/>
                <Icon name="checkmark" style={{color: '4632A1'}}/> 
              </Item>
              <Item floatingLabel style={{borderColor: '4632A1', marginTop: 20}}>
                <label>Password</label>
                <Input value="******" keyboardType="email-address"/>
                <Icon name="eye" style={{color: '4632A1'}}/> 
              </Item>

              <View style={styles.forgotPassView}>
                  <View style={{flex:1, marginLeft:-20}}>
                  
                 <ListItem noBorder>
                   <checkBox checked={true} color="#4632A1"/>
                   <Body>
                     <Text style={{color:'#8f9195', alignSelf: 'flex-start'}}>
                       {''} 
                       Remember Me
                       </Text>
                   </Body>
                   </ListItem> 
                  </View>
                  <View style={{flex:1, marginRight:-20}}>
                  
                 <ListItem noBorder>
                   <Body>
                     <Text style={{color:'#8f9195', alignSelf: 'flex-end'}}>
                       Forgot Password
                       </Text>
                   </Body>
                   </ListItem> 
                  </View> 
                   
              </View>
            </View>

         <View style=
            {{height:100,
             justifyContent: 'center', 
             alignItems: 'center'
          }}>

            <Button rounded style={styles.SignInbtn, styles.shadowbtn,{shadowColor: '#00acee'}}>
              <Text style={{color:'#fffff'}}>SignIn</Text>
            </Button>
          </View>

          <View style={{flex:1}}>
            <Text style={{textAlign: 'center'}}>or SignIn with</Text>
            <View style={styles.socialSignInView}>
              <Button icon style={styles.shadowbtn, 
                {backgroundColor:'#4267b2'}} rounded>
                  <Icon type='MaterialCommunityIcons'
                   name="facebook"
                  style={{color: '#ffff'}}
                  />
              </Button>
              <Button icon style={styles.shadowbtn, 
                {backgroundColor:'#00acee'}} rounded>
                  <Icon type='MaterialCommunityIcons'
                   name="twitter"
                  style={{color: '#ffff'}}
                  />
              </Button>             
              <Button icon style={styles.shadowbtn,
                 {backgroundColor:'#4267b2'}} rounded>
                  <Icon type='MaterialCommunityIcons'
                   name="google-plus"
                  style={{color: '#ffff'}}
                  />
              </Button>

            </View>
          </View>
         </View>
      </View>
   </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  brandview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandViewText:{
    color: '#ffff',
    fontsize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  bottomView: {
    flex: 1.5,
    backgroundColor : '#ffff',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  forgotPassView: {
    height: 50,
    marginTop: 20,
    flexDirection: 'row',
  },
  SignInbtn:{
    alignSelf: 'center',
    backgroundColor: '#4632A1',
    width: Dimensions.get('window').width /2,
    justifyContent: 'center',
  },
  socialSignInView:{
    flexDirection:'row',
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 20,
  },
  shadowbtn:{
    shadowOffset:{width:1, height:10},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 15,

   }
})  ;