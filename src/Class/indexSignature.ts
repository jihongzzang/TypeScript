//class => object
//{mark: 'male', jade: 'male'}
//{chloe: 'female', alex: 'male', anna: 'female}

class Students {
  [index: string]: 'male' | 'female';

  mark: 'male' = 'male';
}

const aClass = new Students();

aClass.mark = 'male';
aClass.jade = 'male';

const bClass = new Students();

bClass.chloe = 'female';
bClass.alex = 'male';
bClass.anna = 'female';
