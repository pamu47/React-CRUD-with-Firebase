const initState = {
    events:[
        {id:'1',title:'Software freedom day',description:'Blah blah',date:'2019/10/10'},
        {id:'2',title:'Azure workshop',description:'Blah blah',date:'2019/10/10'},
        {id:'3',title:'DevFest',description:'Blah blah',date:'2019/10/10'},
        {id:'4',title:'CodeFest',description:'Blah blah',date:'2019/10/10'},
    ]
}

const eventReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_EVENT':
            console.log('event created', action.event)
    }
    return state
}

export default eventReducer;