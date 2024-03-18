//Creare un array di oggetti (membri del team)

//creo array vuoto
const teamMembers = [];

//creo funzione che crei un oggetto 
function createMember(memberName, memberRole, memberPhoto){
    const member = {
        name: memberName,
        role: memberRole,
        photo: memberPhoto,
    }
    
    return member
}

//pusho nell'array i membri 
teamMembers.push(
    createMember('Wayne Barnett','Founder & CEO','wayne-barnett-founder-ceo.jpg'),
    createMember('Angela Caroll','Chief Editor','angela-caroll-chief-editor.jpg'),
    createMember('Walter Gordon','Office Manager','walter-gordon-office-manager.jpg'),
    createMember('Angela Lopez','Social Media Manager','angela-lopez-social-media-manager.jpg'),
    createMember('Scott Estrada','Developer','scott-estrada-developer.jpg'),
    createMember('Barbara Ramos','Graphic Designer','barbara-ramos-graphic-designer.jpg'),
)


//faccio un ciclo for per scorrere l'array teamMembers e stampo per ognuno le sue info
for (let i=0; i < teamMembers.length; i++){
    const teamMem = teamMembers[i];
    console.log(teamMem.name, teamMem.role, teamMem.photo);
}