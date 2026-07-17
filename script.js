const menu=document.querySelector(".menu"),nav=document.querySelector("nav");menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open))});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));document.getElementById("year").textContent=new Date().getFullYear();document.getElementById("quoteForm").addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget);const subject=encodeURIComponent(`Website quote request from ${d.get("name")}`);const body=encodeURIComponent(`Name: ${d.get("name")}
Business: ${d.get("business")||"Not provided"}
Phone: ${d.get("phone")}
Email: ${d.get("email")}
Delivery type: ${d.get("type")}
Pickup: ${d.get("pickup")}
Delivery location: ${d.get("dropoff")}

Delivery details:
${d.get("details")||"No additional details provided"}`);document.getElementById("formStatus").textContent="Opening your email app with the quote request...";location.href=`mailto:montgomeryg@missionreadysupplytransport.com?subject=${subject}&body=${body}`});