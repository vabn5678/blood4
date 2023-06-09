const firebaseConfig = {
    apiKey: "AIzaSyDCTjpEz8-XGADmXDhyWmN7k8ilH2IBw6M",
    authDomain: "survey-form-a9c88.firebaseapp.com",
    databaseURL: "https://survey-form-a9c88-default-rtdb.firebaseio.com",
    projectId: "survey-form-a9c88",
    storageBucket: "survey-form-a9c88.appspot.com",
    messagingSenderId: "1092702133470",
    appId: "1:1092702133470:web:477f253e97b7619d4ef64f"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);
// reference your database
var surveyformDB = firebase.database().ref('surveyform')

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
document.getElementById('formform').addEventListener('submit', submitForm)
function submitForm(e) {
    e.preventDefault();
    var name1 = getElementVal('name');
    var state1 = getElementVal('state');
    var city1 = getElementVal('city');
    var pincode1 = getElementVal('pincode');
    var mobile_number1 = getElementVal('mobile_number');

    var selectedgender;
    document.getElementsByName("gender").forEach(function (elmm) {
        if (elmm.checked) {
            selectedgender = elmm.value;
        }
    })
    var selectbloodgroup;
    document.getElementsByName("bg").forEach(function (el) {
        if (el.checked) {
            selectbloodgroup = el.value;
        }
    })

}

