//Creare un array di oggetti (membri del team)
//creo array vuoto
//creo funzione che crei un oggetto 
//pusho nell'array i membri 

const teamMembers = [];

function createMember(memberName, memberRole, memberPhoto){
    const member = {
        name: memberName,
        role: memberRole,
        photo: memberPhoto,
    }

    return member
}

teamMembers.push(
    createMember('Wayne Barnett','Founder & CEO','wayne-barnett-founder-ceo.jpg'),
    createMember('Angela Caroll','Chief Editor','angela-caroll-chief-editor.jpg'),
    createMember('Walter Gordon','Office Manager','walter-gordon-office-manager.jpg'),
    createMember('Angela Lopez','Social Media Manager','angela-lopez-social-media-manager.jpg'),
    createMember('Scott Estrada','Developer','scott-estrada-developer.jpg'),
    createMember('Barbara Ramos','Graphic Designer','barbara-ramos-graphic-designer.jpg'),
)

