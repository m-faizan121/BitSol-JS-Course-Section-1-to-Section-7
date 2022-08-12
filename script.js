'use strict';
let courses = 0;
let marksArr = new Array(); // To store marks
let points = new Array(); // To store points
let credits = new Array(); // To store credits

// Function to calculat gpa on marks
function calculatePoints(marks) {
    if(marks >= 80)
        return 4.0;
    else if(marks >= 76 && marks < 80)
        return 3.8;
    else if(marks >= 72 && marks < 76)
        return 3.5;
    else if(marks >= 68 && marks < 72)
        return 3.0;
    else if(marks >= 64 && marks < 68)
        return 2.8;
    else if(marks >= 60 && marks < 64)
        return 2.0;
    else if(marks >= 56 && marks < 60)
        return 1.5;
    else if(marks >= 50 && marks < 56)
        return 1.0
    else
        return 0.0;
}

// When number of courses entered by user
document.querySelector(".btn1").addEventListener("click", function(){

    courses = document.querySelector(".courses").value;
    if(courses === '')
    {
        alert('Please Enter Number of Courses');
    }
    else
    {
        courses = Number(courses);
        if(courses <= 0)
        {
            alert('Please Enter Positive Number');
            return;
        }
        document.getElementById("msg").style.display = "block";
        let container = document.querySelector(".inputCourses");
        // Removing previous childs
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        let container2 = document.querySelector(".values"); // 
        // Removing previous childs
        while (container2.firstChild) {
            container2.removeChild(container2.lastChild);
        }

        let placeHolder = "";
        for(let i=1; i<=courses; i++)
        {
            placeHolder = "Enter Course " + i + " Marks";
            let input1 = document.createElement("input");
            input1.type = "number";
            input1.placeholder = placeHolder;
            input1.id = "m" + i;
            input1.style.width = "200px";
            input1.className = "courses";
            input1.min = "0";
            input1.max = "100";
            container.appendChild(input1);
            
            placeHolder = "Enter Course " + i + " Credit Hours";
            let input2 = document.createElement("input");
            input2.type = "number";
            input2.placeholder = placeHolder;
            input2.style.width = "200px";
            input2.id = "c" + i;
            input2.className = "courses";
            input2.min = "0";
            input2.max = "100";
            container.appendChild(input2);

            container.appendChild(document.createElement("br"));
            container.appendChild(document.createElement("br"));
        }

        document.querySelector(".btn2").style.display = "block";
        
    
    }

    

}); 

// To calculate GPA

document.querySelector(".btn2").addEventListener("click", function(){
    
    
    let container = document.querySelector(".values"); // 
    // Removing previous childs
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    
    // Create table heading
    let row = document.createElement("tr");
    row.id = 'tableHead';
    row.style.backgroundColor = 'rgb(126, 161, 222)';
    let col1 = document.createElement("th"); col1.innerHTML = 'Marks'
    let col2 = document.createElement("th"); col2.innerHTML = 'Points'
    let col3 = document.createElement("th"); col3.innerHTML = 'Credit Hours'
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    container.appendChild(row);

    //alert("here");asdasd
    for(let i=1; i<=courses; i++)
    {
        let marks = Number(document.getElementById("m"+i).value);
        let pts = calculatePoints(marks);
        let chrs = Number(document.getElementById("c"+i).value);
        if(marks == 0 || chrs == 0)
        {
            alert("Please Fill All the Fields");
            return;
        }
        points.push(pts);
        credits.push(chrs);
        marksArr.push(marks);
    };

    document.querySelector(".values").style.display = "block";
    let gpa = 0;
    let totalCredits = 0;
    for(let i=0; i<courses; i++)
    {
        let row = document.createElement("tr");
        let col1 = document.createElement("td");
        col1.innerHTML = String(marksArr[i]);
        let col2 = document.createElement("td");
        col2.innerHTML = String(points[i]);
        let col3 = document.createElement("td");
        col3.innerHTML = String(credits[i]);
        
        if(i % 2 == 0)
            row.style.backgroundColor = 'rgb(255, 255, 255)';
        else
            row.style.backgroundColor = 'rgb(126, 161, 222)';
        row.appendChild(col1); row.appendChild(col2); row.appendChild(col3);
        
        container.appendChild(row);

        // GPA Formula
        gpa += (points[i] * credits[i]);
        totalCredits += credits[i];
    }

    gpa = gpa / totalCredits;
    row = document.createElement("tr");
    col1 = document.createElement("td");
    col1.innerHTML = String("GPA");
    col1.colSpan = "2";
    col1.style.fontWeight = 'bold';
    col2 = document.createElement("td");
    col2.innerHTML = String(gpa.toFixed(2));
    col2.style.color = 'red';
    col2.style.fontWeight = 'bold';
    row.appendChild(col1); 
    row.appendChild(col2); 
    container.appendChild(row);

});


