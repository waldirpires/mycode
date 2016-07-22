
def input = System.console().readLine 'Please type in a natural number: '
int n = Integer.parseInt input

def fibmen = []

def r = fibonacci(n, fibmem)

println r

for (item in fibmem) {
	print item + ' '
}


def fibonacci(n, fibmem){
  int r = 1
  if (n > 2){
    r = fibonacci(n-1) + fibonacci(n-2)
  }
  fibmem[n-1] = r
  return r
}


def fibonacciDP(n, fibmem){
  int r = 1
  if (fibmem[n-1] != 0){
    r = fibmem[n-1]
  } else {
    if (n > 2){
	  r = fibonacci(n-1) + fibonacci(n-2)
	}
	fibmem[n-1] = r
  }
  return r
}