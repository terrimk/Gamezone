/*  
App Name: GameZone
Purpose: user can interact with game reviews; practice new features learned about React Native
File: reviewForm.js - form to add new review
Reference: Net Ninja YouTube channel, "React Native Tutorial"
Date started: 1-5-2021
For the love of my life
*/

import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';  // yup is imported package that does validation

const ReviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a number from 1 to 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        })     
        // test parameter takes 3 arguments, 1: string, name of test (can be anything)
        // 2: string, error message shown to end user, 3: function that evaluates the entered value 
})

export default function ReviewForm({ addReview }) {

    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={ReviewSchema}
                onSubmit={(values) => {
                    addReview(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}  // realtime validation, will show error when user clicks away from field
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.title && props.errors.title }</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />  
                        <Text style={globalStyles.errorText}>{ props.touched.body && props.errors.body }</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.rating && props.errors.rating }</Text>
                     
                        <Button title='submit' color='maroon' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

