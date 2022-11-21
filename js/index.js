// function openButton(event, tabname) {
//     var i, tabcontents, tablinks;
//     tabcontent = document.getElementsByClassName("tab-contents");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tab-links");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(tabname).style.display = "block";
//     event.currentTarget.className += " active";
//   }

//   

  

//   <div class="tab-titles">
//                         <p class="tab-links" onclick="opentab(event, 'skills')">Skills</p>
//                         <p class="tab-links" onclick="opentab(event, 'experience')">Experience</p>
//                         <p class="tab-links" onclick="opentab(event, 'education')">Education</p>
//                     </div>
//                     <div class="tab-contents active-tab" id="skills">
//                         <ul>
//                             <li><span>Web Design</span><br>Designing Web/App interfaces</li>
//                             <li><span>Web Development</span><br>Web App Development</li>
//                             <li><span>Database Design</span><br>Database Design and Implementation</li>
//                         </ul>
//                     </div>
//                     <div class="tab-contents" id="experience">
//                         <ul>
//                             <li><span>2022 Nov - Current</span><br>Software Engineering BootCamp at Moringa School</li>
//                             <li><span>2022 Jan - Sept</span><br>Systems Developer at VLAN Technologies</li>
//                             <li><span>2022 June - October</span><br>Part-Time Programming Languages Tutor</li>
//                         </ul>
//                     </div>
//                     <div class="tab-contents" id="education">
//                         <ul>
//                             <li><span>2022-2023</span><br>Software Engineering at Moringa School</li>
//                             <li><span>2021</span><br>HTML, CSS and JavaScript Training through sololearn</li>
//                             <li><span>2015-2019</span><br>BSc Information Science at Rongo University</li>
//                         </ul>
//                     </div>


// let btn = document.getElementsByTagName("button")

// function clickMe() {
//     return btn.innerHTML = "I enjoy the challenge of solving complex customer problems and planning the user experience from the ground up, from research and discovery all the way through to visual designs."
// }

// clickMe()

const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "I enjoy the challenge of solving complex customer problems and planning the user experience from the ground up, from research and discovery all the way through to visual designs.";
  myBtn.style.display = 'none';
}

