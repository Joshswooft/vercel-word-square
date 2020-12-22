
from marisa_trie import Trie

from api.src.anagram import get_anagrams

'''
Solution is valid if the following conditions are met:
- length of words in list is equal to the size of the square
- For each row/column the word is the same

i.e. words=['rose', 'oven', 'send', 'ends'], square_size=4
    ROSE
    OVEN
    SEND
    ENDS

ROSE is in 1st column and 1st row
OVEN is in 2nd column and 2nd row...

'''
def check_solution_is_valid(words:list, square_size: int)->bool:
    if len(words) != square_size:
        return False
    for i in range(square_size):
        w = ""
        expected = words[i]
        for word in words:
            w += word[i]
            if w not in expected:
                return False
        if w != expected:
            return False
    return True

# On each pass we attempt to add another word to the words list. 
# If the word list is valid we return it as the result
def recurse_generate(words:list, trie: Trie, square_size:int, chosen_words_length=0)->list:
    if chosen_words_length >= square_size or square_size <= 1:
        if check_solution_is_valid(words, square_size):
            return words
        return None
    
    # build up the solution letter by letter
    # on each iteration we check if the substring is a key inside the Trie
    # if not a key then we know the current permutation is not a solution so return None
    # loop through the characters

    for i in range(chosen_words_length, square_size):
        prefix = "".join(word[i] for word in words)
        # using the soon to be deprecated function because it runs ~30% faster
        if not trie.has_keys_with_prefix(prefix):
            return None
        
    prefix = "".join(word[chosen_words_length] for word in words)
    # we use a prefix to dictate which key to start going over
    for word in trie.iterkeys(prefix):
        new_list = words + [word]
        res = recurse_generate(new_list, trie, square_size, chosen_words_length+1)
        if res:
            return res

    return None


def generate_word_square(n: int, letters:str)->list:
    assert n > 0, "Invalid square"
    words = get_anagrams(n, letters)
# Trie - https://en.wikipedia.org/wiki/Trie
    t = Trie(words)
    result = recurse_generate([], t, n, 0)
    print(result)
    return result


if __name__ == "__main__":
    generate_word_square(4, "eeeeddoonnnsssrv")
    generate_word_square(4, "aaccdeeeemmnnnoo")
    generate_word_square(5, "aaaeeeefhhmoonssrrrrttttw")
    generate_word_square(5, "aabbeeeeeeeehmosrrrruttvv")
    generate_word_square(7, "aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy")
