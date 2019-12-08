import Data.Char
vowels st = [c | c <- st, c `elem` ['a','e','i','o','u','y']]
lowerString st = [toLower loweredString | loweredString <- st]
howmanyvowels st = length (vowels (lowerString st))
