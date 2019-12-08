removeChar :: String -> String
removechar str = drop 1 (reverse (drop 1 (reverse str)))
-- tail . init