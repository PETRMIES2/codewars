
module Codewars.Kata.TenMinuteWalk where

isValidWalk :: [Char] -> Bool
isValidWalk walk = do
  if longerThan 10 walk || (length walk) < 10
    then False
    else ((occurance 'n' walk) == (occurance 's' walk)) &&  ((occurance 'w' walk) == (occurance 'e' walk))

occurance :: Eq a => a -> [a] -> Int
occurance x = length  . filter (x==)
isNonEmpty [] = False
isNonEmpty (_:_) = True
longerThan :: Int -> [a] -> Bool
longerThan n xs = isNonEmpty $ drop n xs

-- valid value list  = do
--   if (null list)
--     then value
--     else  
--      case (head list) of
--                        'n' -> valid (fst value + 1,snd value) (tail list)
--                        's' -> valid (fst value - 1,snd value) (tail list)
--                        'w' -> valid (fst value, snd value + 1) (tail list)
--                        'e' -> valid (fst value, snd value - 1) (tail list)
--                        _ -> valid value (tail list)
-- 
