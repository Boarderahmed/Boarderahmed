me.style.display = "none";
me2.style.display = "none";
you.style.display = "none";
you1.style.display = "none";
draw.innerHTML = "";
let Value1 = "X";
let Value2 = "O";
let tap = " ";
const play = (item) => {
  if (item == "one") {
    if (tap == "step1") {
      box1.innerHTML = Value1;
      tap = "step2";
    } else if (tap == "step2") {
      box1.innerHTML = Value2;
      tap = "step1";
    }
  }
  if (item == "two") {
    if (tap == "step1") {
      box2.innerHTML = Value1;
      tap = "step2";
    } else if (tap == "step2") {
      box2.innerHTML = Value2;
      tap = "step1";
    }
  }
  if (item == "three") {
    if (tap == "step1") {
      box3.innerHTML = Value1;
      tap = "step2";
    } else if (tap == "step2") {
      box3.innerHTML = Value2;
      tap = "step1";
    }
  }
  if (item == "four") {
    if (tap == "step1") {
      box4.innerHTML = Value1;
      tap = "step2";
    } else if (tap == "step2") {
      box4.innerHTML = Value2;
      tap = "step1";
    }
  }
  if (item == "five") {
    if (tap == "step1") {
      box5.innerHTML = Value1;
      tap = "step2";
    } else if (tap == "step2") {
      box5.innerHTML = Value2;
      tap = "step1";
    }
  }
  if (item == "six") {
    if (tap == "step1") {
      box6.innerHTML = Value1;
      tap = "step2";
    } else if (tap == "step2") {
      box6.innerHTML = Value2;
      tap = "step1";
    }
  }
  if (item == "seven") {
    if (tap == "step1") {
      box7.innerHTML = Value1;
      tap = "step2";
    } else if (tap == "step2") {
      box7.innerHTML = Value2;
      tap = "step1";
    }
  }
  if (item == "eight") {
    if (tap == "step1") {
      box8.innerHTML = Value1;
      tap = "step2";
    } else if (tap == "step2") {
      box8.innerHTML = Value2;
      tap = "step1";
    }
  }
  if (item == "nine") {
    if (tap == "step1") {
      box9.innerHTML = Value1;
      tap = "step2";
    } else if (tap == "step2") {
      box9.innerHTML = Value2;
      tap = "step1";
    }
  }
  //horizontal win...
  if (
    box1.innerHTML == Value1 &&
    box2.innerHTML == Value1 &&
    box3.innerHTML == Value1
  ) {
    me.style.display = "block";
    you1.style.display = "block";
    tap = "";
  } else if (
    box1.innerHTML == Value2 &&
    box2.innerHTML == Value2 &&
    box3.innerHTML == Value2
  ) {
    me2.style.display = "block";
    you.style.display = "block";
    tap = "";
  }
  if (
    box4.innerHTML == Value1 &&
    box5.innerHTML == Value1 &&
    box6.innerHTML == Value1
  ) {
    me.style.display = "block";
    you1.style.display = "block";
    tap = "";
  } else if (
    box4.innerHTML == Value2 &&
    box5.innerHTML == Value2 &&
    box6.innerHTML == Value2
  ) {
    me2.style.display = "block";
    you.style.display = "block";
    tap = "";
  }
  if (
    box7.innerHTML == Value1 &&
    box8.innerHTML == Value1 &&
    box9.innerHTML == Value1
  ) {
    me.style.display = "block";
    you1.style.display = "block";
    tap = "";
  } else if (
    box7.innerHTML == Value2 &&
    box8.innerHTML == Value2 &&
    box9.innerHTML == Value2
  ) {
    me2.style.display = "block";
    you.style.display = "block";
    tap = "";
  }
  //Vertical win...
  if (
    box1.innerHTML == Value1 &&
    box4.innerHTML == Value1 &&
    box7.innerHTML == Value1
  ) {
    me.style.display = "block";
    you1.style.display = "block";
    tap = "";
  } else if (
    box1.innerHTML == Value2 &&
    box4.innerHTML == Value2 &&
    box7.innerHTML == Value2
  ) {
    me2.style.display = "block";
    you.style.display = "block";
    tap = "";
  }
  if (
    box2.innerHTML == Value1 &&
    box5.innerHTML == Value1 &&
    box8.innerHTML == Value1
  ) {
    me.style.display = "block";
    you1.style.display = "block";
    tap = "";
  } else if (
    box2.innerHTML == Value2 &&
    box5.innerHTML == Value2 &&
    box8.innerHTML == Value2
  ) {
    me2.style.display = "block";
    you.style.display = "block";
    tap = "";
  }
  if (
    box3.innerHTML == Value1 &&
    box6.innerHTML == Value1 &&
    box9.innerHTML == Value1
  ) {
    me.style.display = "block";
    you1.style.display = "block";
    tap = "";
  } else if (
    box3.innerHTML == Value2 &&
    box6.innerHTML == Value2 &&
    box9.innerHTML == Value2
  ) {
    me2.style.display = "block";
    you.style.display = "block";
    tap = "";
  }
  //Diagonals win...
  if (
    box1.innerHTML == Value1 &&
    box5.innerHTML == Value1 &&
    box9.innerHTML == Value1
  ) {
    me.style.display = "block";
    you1.style.display = "block";
    tap = "";
  } else if (
    box1.innerHTML == Value2 &&
    box5.innerHTML == Value2 &&
    box9.innerHTML == Value2
  ) {
    me2.style.display = "block";
    you.style.display = "block";
    tap = "";
  }
  if (
    box3.innerHTML == Value1 &&
    box5.innerHTML == Value1 &&
    box7.innerHTML == Value1
  ) {
    me.style.display = "block";
    you1.style.display = "block";
    tap = "";
  } else if (
    box3.innerHTML == Value2 &&
    box5.innerHTML == Value2 &&
    box7.innerHTML == Value2
  ) {
    me2.style.display = "block";
    you.style.display = "block";
    tap = "";
  }
  if (
    me2.style.display == "none" &&
    you.style.display == "none" &&
    box1.innerHTML &&
    box2.innerHTML &&
    box3.innerHTML &&
    box4.innerHTML &&
    box5.innerHTML &&
    box6.innerHTML &&
    box7.innerHTML &&
    box8.innerHTML &&
    box9.innerHTML
  ) {
    draw.innerHTML = "DRAW &#x1F91D";
    tap = "";
  }
};
const Start = () => {
  if (start.innerHTML == "START GAME") {
    start.innerHTML = "RESET";
    tap = "step1";
  } else if (start.innerHTML == "RESET") {
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
    me2.style.display = "none";
    you.style.display = "none";
    draw.innerHTML = "";
    tap = "";
    me.style.display = "none";
    you1.style.display = "none";
    start.innerHTML = "START GAME";
  }
};
