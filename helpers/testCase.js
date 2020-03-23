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

module.exports = 
{
  firstParams,
  firstAnswer,
  secondParams,
  secondAnswer,
  thirdParams,
  thirdAnswer,
  fourthParams,
  fourthAnswer,
  fifthParams,
  fifthAnswer
}