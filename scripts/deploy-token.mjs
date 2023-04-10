//Importamos las librerias necesarias
import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana"; 
import {config} from 'dotenv'; 

//Cargamos las variables de entorno
config();

//Creamos la instancia de la SDK con la clave privada
const sdk = ThirdwebSDK.fromPrivateKey("devnet", process.env.PRIVATE_KEY);

//Creamos el objeto con la metadata del token
const metadata = {
    symbol: "MCOL",  //Simbolo del token
    description: "Metaverse Colombia Token", //Descripcion del token
    name: "Metaverse Colombia", //Nombre del token
    initialSupply: 100 //Cantidad inicial de tokens
 }


//Creamos el token
const address = await sdk.deployer.createToken(metadata);

//Imprimimos los resultados
console.log("Token deployed at: ", address);
console.log("Token metadata: ", metadata);
console.log("Contract deployed successfully");

const token = await sdk.getToken(address);
const supply = await token.totalSupply();

console.log("Token supply: ", supply);