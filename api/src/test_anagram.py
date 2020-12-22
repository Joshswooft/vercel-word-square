import unittest

from anagram import get_anagrams


class AnagramTestCase(unittest.TestCase):
    
    def test_invalid_number_input(self):
        with self.assertRaises(AssertionError):
            get_anagrams(-1, "foo")


    def test_invalid_square_length(self):
        with self.assertRaises(AssertionError):
            get_anagrams(100, "bar")

    def test_get_anagrams(self):
        n = 3
        res = get_anagrams(n, "bar")
        self.assertGreater(len(res), 0)
        for r in res:
            self.assertEqual(len(r), n)


if __name__ == '__main__':
    unittest.main()
