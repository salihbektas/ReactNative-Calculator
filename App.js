import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';



const App = () =>  {
  const [result, setResult] = useState("");
  const [prev, setPrev] = useState([0]);
  const [operation, setOperation] = useState("");
  const [reset, setReset] = useState(false);
  


  function handleComma(){

    if(result === "")
      setResult('0,');
    else if(!result.includes(","))
      setResult(result + ',');

  }

  function handleEaqual(){
    setReset(true);
    
    let current;
    console.log(prev);
    
    console.log("current : " + current);
    
    console.log("operation : " + operation);

    console.log("result : " + result);
    if(result !== 0){
      current = parseFloat(result.replace(",", "."));
    }
    if(operation === "+"){
      setResult(String(current+prev[prev.length-1]).replace(".", ","));
      setPrev([...prev, current + prev[prev.length-1]]);
      setOperation("");
      return;
    }
  }

  function handleAdd(){
    setOperation("+");
    setReset(true);
    if(prev[prev.length -1] !== 0)
      handleEaqual();
    else{
      setPrev([...prev, parseFloat(result.replace(",", "."))]);
      setResult("");
    }
  }

  function handleCE(){
    setOperation("");
    setPrev([0]);
    setResult("");
    setReset(false);
  }

  function handleDigit(digit){
    if(reset){
      setReset(false);
      setResult(digit);
    }
    else
      setResult(result + digit);
  }


  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Calculator</Text>
      </View>

      <View style={styles.results}>
        <Text style={styles.resultText}>{result === "" ? "0" : result}</Text>
      </View>

      <View style={styles.buttonSide}>

        <TouchableOpacity onPress={handleAdd} style={styles.operationButton}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {setResult(result + '')}} style={styles.operationButton}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {setResult(result + '')}} style={styles.operationButton}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {setResult(result + '')}} style={styles.operationButton}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=> handleDigit("7")} style={styles.numberButton}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> handleDigit("8")} style={styles.numberButton}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> handleDigit("9")} style={styles.numberButton}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {result.length >= 0 ? setResult(result.slice(0,-1)) : null}} style={styles.operationButton}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=> {setResult(result + '4')}} style={styles.numberButton}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {setResult(result + '5')}} style={styles.numberButton}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {setResult(result + '6')}} style={styles.numberButton}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCE} style={styles.operationButton}>
          <Text style={styles.buttonText}>CE</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=> {setResult(result + '1')}} style={styles.numberButton}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {setResult(result + '2')}} style={styles.numberButton}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {setResult(result + '3')}} style={styles.numberButton}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleComma} style={styles.operationButton}>
          <Text style={styles.buttonText}>,</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {result !== "" ? setResult(result + '0') : null}} style={{...styles.numberButton, width:"44%"}}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleEaqual} style={{...styles.operationButton, width:"44%"}}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  
  main: {
    flex: 1,
    backgroundColor: "black",
  },
  
  header: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    paddingLeft:12,
  },

  headerText:{
    color: "white",
    fontSize: 28,
    fontWeight: "bold"
  },

  results: {
    flex: 4,

    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 12,
  },

  resultText:{
    color: "white",
    fontSize: 48,
    fontWeight: "600"
  },

  buttonSide: {
    flex: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  row: {
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-evenly",
  },

  operationButton:{
    height: windowHeight/12,
    width: "20%",
    borderRadius:windowHeight/30,
    marginLeft:"4%",
    marginTop: windowHeight/60,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:"orange",
  },

  numberButton:{
    height: windowHeight/12,
    width: "20%",
    borderRadius:windowHeight/30,
    marginLeft:"4%",
    marginTop: windowHeight/60,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:"lime",
  },

  buttonText: {
    fontSize:24,
    fontWeight:"bold"
  }

});

export default App;