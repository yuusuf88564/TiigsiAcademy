let current=null;
function showStudent(s){
 current=s;
 document.getElementById("gate").classList.add("hidden");
 document.getElementById("portal").classList.remove("hidden");
 const ids={welcomeName:s.name,welcomeCourse:s.course,pId:s.studentId,pStatus:s.status,pGrade:s.grade||"—",pAverage:s.average||"—",pName:s.name,pPhone:s.phone,pEmail:s.email||"—",pCity:s.city,pGender:s.gender,pAge:s.age};
 Object.entries(ids).forEach(([id,val])=>document.getElementById(id).textContent=val);
 const percent=s.examStatus==="Completed"?100:s.examStatus==="In Progress"?60:0;
 document.getElementById("bar").style.width=percent+"%";
 document.getElementById("examText").textContent="Exam Status: "+s.examStatus;
 const btn=document.getElementById("certificateBtn");
 if(s.examStatus==="Completed"){btn.disabled=false;btn.textContent="Soo dejiso / Daabac Shahaadada";btn.onclick=()=>alert("Certificate module-ku wuxuu diyaar u yahay in lagu xiro naqshadda rasmiga ah ee college-ka.");}
}
function enterPortal(){
 const id=document.getElementById("sid").value.trim(), phone=document.getElementById("phone").value.trim();
 const s=findStudent(id,phone);
 if(!s){document.getElementById("error").textContent="Student ID ama telefoonka lama helin. Marka hore iska diiwaangeli.";return;}
 sessionStorage.setItem(SESSION_KEY,s.studentId);showStudent(s);
}
function logoutStudent(){sessionStorage.removeItem(SESSION_KEY);location.reload()}
function restore(){
 const id=sessionStorage.getItem(SESSION_KEY);
 if(id){const s=getStudents().find(x=>x.studentId===id);if(s)showStudent(s)}
}
restore();
