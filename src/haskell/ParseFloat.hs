-- Write function parseFloat which takes a string and returns a number or Nothing if conversion is not possible.

module ParseFloat where

import Data.Maybe

parseFloat :: String -> Maybe Float
parseFloat s =  case reads s  of
                  [(n, _)] -> Just n
                  _ -> Nothing
                         




