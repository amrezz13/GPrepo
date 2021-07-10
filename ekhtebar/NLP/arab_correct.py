import pyarabic.araby as arabic
import re
from difflib import SequenceMatcher


def simple_arab(text):
    text = arabic.strip_diacritics(text)
    text = arabic.strip_tatweel(text)
    text = arabic.normalize_hamza(text, method="tasheel")
    text = text.replace('\u0629', '\u0647')
    text = text.replace('\u0649', '\u064A')
    text = text.replace('\n', "")
    text = re.sub(r'\b\u0648', '', text)
    text = re.sub(r'\b\u0627\u0644(?![\u0644\u0647]|[\W])', ' ', text)
    text = re.sub(r'\u0621\b', '', text)
    text = re.sub(r'[^\w]', ' ', text)
    text = re.sub(r'\b\u0627u\0628(\u0627|\u0627\u0020|\u0648|\u0648\u0020|\u0649)', '\u0020\u0627u\0628\u0020', text)
    text = text.replace(' ', '')
    return text


def compare_arab(text1, text2):
    return SequenceMatcher(None, text1, text2).ratio()


question = "يا أيها الذين أمنوا اتقوا الله"
answer1 = "يا ايها الذين امنوا اتفوا الله"
answer2 = "يا أيها الذين أمنوا اطيعو الله ورسوله"

question = simple_arab(question)
answer1 = simple_arab(answer1)
answer2 = simple_arab(answer2)

print(compare_arab(question, answer1))
print(compare_arab(question, answer2))