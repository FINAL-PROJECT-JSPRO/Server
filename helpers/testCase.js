const firstParams = ['']

const firstAnswer = ['Javascript is awesome']

const secondParams = [
  "6, 4, 'add'",
  "5, 4, 'subtract'",
  "3, 2, 'multiply'",
  "15, 3, 'divide'"
]

const secondAnswer = [ 10, 1, 6, 5 ]

const thirdParams = [
  "\['Humble', 'Bamboo', 'Back', 'Book', 'Built', 'Monolith', 'Sportive'\]",
  "\['Fair', 'Muscle', 'Bond'\]"
]

const thirdAnswer = [
  "Hacktiv",
  "Fun"

]

const fourthParams = [
  "2, 8",
  "4, 7",
  "6, 9",
  "4, 2"
]

const fourthAnswer = [ 15, 27, 53, 7 ]

const fifthParams = 
[
  "\[\"HACK:SIA\", \"VA:DO\", \"IN:TE\", \"NE:TI\"\]",
  "\[\"HACK:TE\", \"VA:TI\"\]",
  "\[\"asd:123\", \"fgh:456\"\]"
]

const fifthAnswer = [
  ["HACK:TI", "VA:TE", "IN:DO", "NE:SIA"],
  ["HACK:TI", "VA:TE"],
  ["asd:456", "fgh:123"]
]

const sixthParams = [
  "{a: 1, b: 'str', c: 2, d: true, e: a => a, f: 3}",
  "{}",
  "{g: 'hacktiv', h: 6, i: 0, j: f => console.log(f), t: f => f}"
]

const sixthAnswer = [
  [ 1, 2, 3, 'e' ],
  ['The Object is Empty'],
  [6, 0, 'j', 't']
]

const seventhParams = [
  "'one two three', 'four five six'",
  "'hacktiv', 'jscript'"
]

const seventhAnswer = [
  [
    'one two three', 'fne two three',
    'foe two three', 'fou two three',
    'fourtwo three', 'four wo three',
    'four fo three', 'four fi three',
    'four fivthree', 'four fivehree',
    'four five ree', 'four five see',
    'four five sie', 'four five six'
  ],
  [
    'hacktiv',
    'jacktiv',
    'jscktiv',
    'jscrtiv',
    'jscriiv',
    'jscripv',
    'jscript'
  ]
]

const eightParams = [
  "'Hacktiv8'",
  "'Final'",
  "'Project'"
]

const eightAnswer = [
  'Hacktiv8',
  'Final',
  'Project'
]

const ninthParams = [
  "\[4, 4, 4, 4, 2, 4, 4\]",
  "\[2, 1, 2, 2, 2, 2, 2\]",
  "\[3/4, 6/8, 9/12, 0.75, 1.25\]",
  "\[0.75, 40/100, 2/5, 2*2/10, 0.4, 8/20\]"
]

const ninthAnswer = [
  2, 1, 1.25, 0.75
]

module.exports = 
{
  firstParams, firstAnswer,
  secondParams, secondAnswer,
  thirdParams, thirdAnswer,
  fourthParams, fourthAnswer,
  fifthParams, fifthAnswer,
  sixthParams, sixthAnswer,
  seventhParams, seventhAnswer,
  eightParams, eightAnswer,
  ninthParams, ninthAnswer
}