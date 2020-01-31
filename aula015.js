let s=['mon','tue','wed','thu','fri','sat']
s.push('sun')
console.log(`the week has ${s.length} days:`)
console.log(s)
for (var i =0;i<s.length;i++)
  console.log(s[i])
console.log('ordering:') 
s.sort()
for (var i =0;i<s.length;i++)
    console.log(s[i])
console.log('other way:')
for (x in s)
    console.log(s[x])  
console.log('finding sun:')
if (s.indexOf('sun')>=0)
    console.log('sun exists')
else
    console.log('sun not exists')

console.log('finding sum:')
if (s.indexOf('sum')>=0)
    console.log('sum exists')
else
    console.log('sum does not exists')