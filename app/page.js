"use client"
import { useEffect } from 'react';
import SlotMachine from '../components/SlotMachine'

export default function Home() {
  useEffect(()=>{
    document.title = 'Got lucky?'
  },[])
  return (
    <div>
      <SlotMachine />
    </div>
  );
}
