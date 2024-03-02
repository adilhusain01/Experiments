const user1 = {
    'name': 'adil husain',
    age: 20,
    address: {
        'city': 'pune',
        'state': 'uttar pradesh'
    }
}

const user2 = user1;

user2.name = 'adil';

console.log(user1);