function updateTagValue() {
    fetch('/tag_value')
    .then(response => response.json())
    .then(data => {
        document.getElementById("tag-value1").innerText = data.tag1;
        document.getElementById("tag-value2").innerText = data.tag2;
        document.getElementById("tag-value3").innerText = data.tag3;
        document.getElementById("tag-value4").innerText = data.tag4;
        document.getElementById("tag-value5").innerText = data.tag5;
        document.getElementById("tag-value6").innerText = data.tag6;
        document.getElementById("tag-value7").innerText = data.tag7;
        document.getElementById("tag-value8").innerText = data.tag8;
        document.getElementById("tag-value9").innerText = data.tag9;
        document.getElementById("tag-value10").innerText = data.tag10;
        document.getElementById("tag-value11").innerText = data.tag11;
        document.getElementById("tag-value12").innerText = data.tag12;
        document.getElementById("tag-value13").innerText = data.tag13;
        document.getElementById("tag-value14").innerText = data.tag14;
        document.getElementById("tag-value15").innerText = data.tag15;
        document.getElementById("tag-value16").innerText = data.tag16;
        document.getElementById("tag-value17").innerText = data.tag17;
        document.getElementById("tag-value18").innerText = data.tag18;
        document.getElementById("tag-value19").innerText = data.tag19;
        document.getElementById("tag-value20").innerText = data.tag20;
        document.getElementById("tag-value21").innerText = data.tag21;
        document.getElementById("tag-value22").innerText = data.tag22;
        document.getElementById("tag-value23").innerText = data.tag23;
        document.getElementById("tag-value24").innerText = data.tag24;
        document.getElementById("tag-value25").innerText = data.tag25;
        document.getElementById("tag-value26").innerText = data.tag26;
        });
     }
    setInterval(updateTagValue, 1000);