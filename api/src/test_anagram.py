import unittest

from .anagram import get_anagrams, check_anagram
from collections import Counter

class AnagramTestCase(unittest.TestCase):
    
    def test_invalid_number_input(self):
        with self.assertRaises(AssertionError):
            get_anagrams(-1, "foo")


    def test_invalid_square_length(self):
        with self.assertRaises(AssertionError):
            get_anagrams(100, "bar")

    def test_anagrams(self):
        n = 4
        s = "door"
        res = get_anagrams(n, s)
        # Check that every word has the same count as the input
        counts_s = Counter(s)
        for word in res:
            c = Counter(word)
            for char in word:
                if char not in counts_s or c[char] - counts_s[char] > 1 or len(s) != n:
                    self.fail(word + " is not an anagram of " + s)

    def test_check_anagram_valid(self):
        a = "antler"
        b = "rental"
        res = check_anagram(a, b)
        self.assertTrue(res)

        a = "house"
        b = "soe"
        res = check_anagram(a, b)
        self.assertTrue(res)


    def test_check_anagram_invalid(self):
        a = "door"
        b = "dodo"
        res = check_anagram(a, b)
        self.assertFalse(res)

        a = "beg"
        b = "bee"

        res = check_anagram(a, b)
        self.assertFalse(res)

        a = "foo"
        b = "bar"
        res = check_anagram(a, b)
        self.assertFalse(res)

    def test_get_anagrams(self):
        n = 3
        res = get_anagrams(n, "bar")
        self.assertGreater(len(res), 0)
        for r in res:
            self.assertEqual(len(r), n)


if __name__ == '__main__':
    unittest.main()
