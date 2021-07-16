import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as helloIC_idl, canisterId as helloIC_id } from 'dfx-generated/helloIC';

const agent = new HttpAgent();
const helloIC = Actor.createActor(helloIC_idl, { agent, canisterId: helloIC_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await helloIC.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
