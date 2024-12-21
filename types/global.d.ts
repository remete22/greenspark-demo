type Product = {
  id: number,
  type: 'carbon' | 'plastic' | 'trees',
  amount: number,
  action: 'collects' | 'plants' | 'offsets',
  active: boolean,
  linked: boolean,
  selectedColor: 'white' | 'black' | 'blue' | 'green' | 'beige'
}