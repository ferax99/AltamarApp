import AsyncStorage from "@react-native-async-storage/async-storage";

var telefono=""
var id="";
var color=""
var nombre=""
var rol= ""
    

const guardar =async(valor)=>{
    try{
        var f = await AsyncStorage.getItem(valor)
        console.log(f) 
        return f
    //   telefono=await AsyncStorage.getItem("telefono");
    //   id=await AsyncStorage.getItem("id");
    //   nombre=await AsyncStorage.getItem("nombre");
    //   rol=await AsyncStorage.getItem("rol");
    //   if(rol!="vendedor"){
    //     color=await AsyncStorage.getItem("color");
    //   }else{
    //     color=await AsyncStorage.getItem("color");
    //   }
     
      
        

    }catch (err){
        console.log(err)
    }

}

const UserData = {id: guardar("id"), telefono: guardar("telefono"), nombre: guardar("nombre"), rol:guardar("rol"), color:guardar("color")}
export default UserData;