# Anagram solver
from collections import Counter


def get_anagrams(n: int, letters: str)->list:
    assert (n >= 1 and n <= len(letters)), "Invalid anagram"
    
    anagrams = []
    with open("./static/words.txt") as f:
        anagrams = [ word.strip() for word in f.readlines() if not set(word.strip()) - set(letters) and len(word.strip()) == n]

    return anagrams

if __name__ == "__main__":
    a = get_anagrams(4, "eeeeddoonnnsssrv")
    print(a)
    
