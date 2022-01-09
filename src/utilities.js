const Utilities = {
    formatDate(date) {
        // console.log("Format date called " + date);
        var dateString
        dateString = dayName(new Date(date).getDay());
        dateString += ", ";
        dateString += new Date(date).toLocaleDateString();
        return dateString
    }
}

function dayName(d) {
    switch (d) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 0: return "Sunday";
        default: return "Error";
    }
}

export default Utilities;