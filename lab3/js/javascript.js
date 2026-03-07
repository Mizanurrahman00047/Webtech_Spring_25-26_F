function collect_data()
{
    let isNameValid = collect_name();
    let isCgpaValid = collect_cgpa();

    if(isNameValid && isCgpaValid)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function collect_name()
{
    let name = document.getElementById("name").value;

    if(name == "")
    {
        document.getElementById("NameError").innerHTML="Name cannot be empty";
        return false;
    }
    else if(name.length < 5)
    {
        document.getElementById("NameError").innerHTML="Name must be at least 5 characters";
        return false;
    }
    else
    {
        document.getElementById("NameError").innerHTML="";
        return true;
    }
}

function collect_cgpa()
{
    let cgpa = document.getElementById("CGPA").value;

    if(cgpa == "")
    {
        document.getElementById("CGPAError").innerHTML="CGPA cannot be empty";
        return false;
    }
    else
    {
        document.getElementById("CGPAError").innerHTML="";
        return true;
    }
}