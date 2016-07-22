class No implements Comparable{
	char caractere
	def nos = [:]
	def isTerminal = false
	def isRoot = false
	int numWords = 0
	// nos.sort(it.caractere)
	public String toString(){
		def sb = ''<<''
		if (isRoot){
			sb <<= '{numWords: ' + numWords + '] ' 
		}
		sb <<= caractere
		sb <<= " -> "
		sb <<= nos
		return sb
		//this.properties
	}
	
	int compareTo(obj){
		return caractere - obj.caractere
	}
	
	def inserirPalavra(palavra){
		if (palavra.length() == 0){
			isTerminal = true
			return true
		}
		char letra = palavra[0]
		if (palavra.length() > 1){
			palavra = palavra.substring(1)
		} else {
			palavra = ""
		}
		def no = nos.get(letra)
		if (no == null){
			no = new No(caractere: letra)
			nos.putAt(letra, no)
		}
		if (isRoot){
			numWords++
		}
		return no.inserirPalavra(palavra)
	}
	
	def existePalavra(palavra){
		if (palavra.length() == 0){
			return true
		}
		char letra = palavra[0]
		if (palavra.length()>1){
			palavra = palavra.substring(1)
		} else {
		  palavra = ''
		}
		def no = obterNo(letra)
		if (no != null){
			return no.existePalavra(palavra)
		} else {
			return false
		}
	}
	
	def obterNo(letra){
		for (no in nos){
			if (no.caractere == letra){
				return no
			}
		}	
		return null
	}
	
}

def a = new No(caractere: '*', isRoot: true)
def b = new No(caractere: 'b')
def f = new No(caractere: 'f')

println 'Arvore digital vazia'
println a

def palavra = 'casa'
a.inserirPalavra(palavra)

println 'Arvore digital com uma palavra'

println a

def palavras = ["the", "book", "table", "tablet"]
for (l in palavras){
	println 'Adding word: ' + l
	a.inserirPalavra(l)
}

println a