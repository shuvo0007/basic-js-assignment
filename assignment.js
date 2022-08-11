// 1. convert radian to degree
function radianToDegree(radian) {
  if (typeof radian === "number") {
    let degree = radian * (180 / Math.PI);
    return degree.toFixed(2);
  } else {
    return "Please enter a valid Number";
  }
}

// 2. check javascript file
function isJavaScriptFile(fileName) {
  if (typeof fileName === "string") {
    let checkFileType = fileName.split(".");
    if (checkFileType[checkFileType.length - 1] == "js") {
      return true;
    } else {
      return false;
    }
  } else {
    return "Please type a valid file name";
  }
}

// 3. oil price
function oilPrice(diesel, petrol, octane) {
  if (
    typeof diesel === "number" &&
    typeof petrol === "number" &&
    typeof octane === "number"
  ) {
    let total = 0;
    total = diesel * 114 + petrol * 130 + octane * 135;
    return total;
  } else {
    return "Please enter a valid number";
  }
}

// 4. public bus fare
function publicBusFare(totalPerson) {
  if (typeof totalPerson === "number") {
    let fare = 0;
    if (totalPerson < 11) {
      fare = totalPerson * 250;
      return fare;
    } else if (totalPerson == 11) {
      fare = 0;
      return fare;
    } else if (totalPerson > 11 && totalPerson < 50) {
      totalPerson = totalPerson % 11;
      fare = totalPerson * 250;
      return fare;
    } else if (totalPerson == 50) {
      fare = 0;
      return fare;
    } else {
      totalPerson = totalPerson % 50;
      if (totalPerson < 11) {
        fare = totalPerson * 250;
        return fare;
      } else if (totalPerson == 11) {
        fare = 0;
        return fare;
      } else {
        totalPerson = totalPerson % 11;
        fare = totalPerson * 250;
        return fare;
      }
    }
  } else {
    return "Please enter a valid number";
  }
}

// 5. best friend
function isBestFriend(firstPerson, secondPerson) {
  if (typeof firstPerson == "object" && typeof secondPerson == "object") {
    if (
      firstPerson.friend == secondPerson.name &&
      firstPerson.name == secondPerson.friend
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Please enter a valid information";
  }
}
