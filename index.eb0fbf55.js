const O=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))g(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const P of l.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&g(P)}).observe(document,{childList:!0,subtree:!0});function $(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function g(n){if(n.ep)return;n.ep=!0;const l=$(n);fetch(n.href,l)}};O();const e=[{name:"bulbasaur",health:100,attack:10},{name:"ivysaur",health:100,attack:10},{name:"venusaur",health:100,attack:10},{name:"charmander",health:100,attack:10},{name:"charmeleon",health:100,attack:10},{name:"charizard",health:100,attack:10},{name:"squirtle",health:100,attack:10},{name:"wartortle",health:100,attack:10},{name:"blastoise",health:100,attack:10}],x=document.querySelector(".pokemon-player"),s=document.querySelector(".player-health-text"),u=document.querySelector(".player-life"),T=document.querySelectorAll(".pokeballs-player"),M=document.querySelector(".pokemon-machine"),p=document.querySelector(".machine-health-text"),H=document.querySelector(".machine-life"),S=document.querySelectorAll(".pokeballs-machine"),f=document.querySelector(".btn-attack"),L=document.querySelector(".btn-potion"),o=document.querySelector(".history-content");let c=Math.floor(Math.random()*e.length),r=Math.floor(Math.random()*e.length),y,k,m=6;const q=20;let t=e[c].health,d=e[c].name.toUpperCase(),h=e[r].health,C=e[r].name.toUpperCase(),A=6,E=6;const N=()=>{x.textContent=d,s.textContent=`HEALTH : ${e[c].health}%`,u.value=e[c].health,M.textContent=e[r].name.toUpperCase(),p.textContent=`HEALTH : ${e[r].health}%`,H.value=e[r].health,L.textContent=`POTION (${m})\u{1F9EA}`},U=()=>{if(console.log(t),t>0){let a=Math.round(Math.random()*(10-1)+1)*e[c].attack;h=h-a,H.value=h,h>0?p.textContent=`HEALTH: ${h}%`:p.textContent="HEALTH: 0%";let i=document.createElement("p");i.textContent=`\u25B6PLAYER: Pokemon ${d} attack:${a} \u25B7CPU: Pokemon life ${h>0?h:0}%`,o.childNodes.length>5?o.removeChild(o.firstChild):o.appendChild(i)}f.disabled=!0,h>0?setTimeout(()=>{v()},3e3):b()},v=()=>{let a=Math.round(Math.random()*(10-1)+1)*e[r].attack;t=t-a,u.value=t,t>0?s.textContent=`HEALTH: ${t}%`:s.textContent="HEALTH: 0%";let i=document.createElement("p");i.textContent=`\u25B6CPU: Pokemon ${C} attack:${a} \u25B7PLAYER: Pokemon life ${t>0?t:0}%`,o.childNodes.length>5?o.removeChild(o.firstChild):o.appendChild(i),t<=0&&b(),f.disabled=!1},b=()=>{let a=document.createElement("p");t<=0&&(y==0&&alert("PLAYER WON"),c=Math.floor(Math.random()*e.length),d=e[c].name.toUpperCase(),x.textContent=d,s.textContent=`HEALTH : ${e[c].health}%`,u.value=e[c].health,t=e[c].health,T[A-1].style.filter="grayscale(100%)",A=A-1,y=y-1,console.log(y),a.textContent=`\u25B6PLAYER: ${d}  I CHOOSE YOU !!!`,o.childNodes.length>6?o.removeChild(o.firstChild):o.appendChild(a),setTimeout(()=>{v()},3e3)),h<=0&&(k==0&&alert("PLAYER WON"),r=Math.floor(Math.random()*e.length),C=e[r].name.toUpperCase(),M.textContent=C,p.textContent=`HEALTH : ${e[r].health}%`,H.value=e[r].health,h=e[r].health,S[E-1].style.filter="grayscale(100%)",E=E-1,a.textContent=`\u25B6CPU: ${C}  I CHOOSE YOU !!!`,o.childNodes.length>6?o.removeChild(o.firstChild):o.appendChild(a),f.disabled=!1,k=k-1,console.log(k))},Y=()=>{m!=0&&t>0&&t<=80&&(t=t+q,m=--m,u.value=t,s.textContent=`HEALTH: ${t}%`,L.innerHTML=`POTION (${m})\u{1F9EA}`)};window.addEventListener("load",N());f.addEventListener("click",()=>{U()});L.addEventListener("click",()=>{Y()});