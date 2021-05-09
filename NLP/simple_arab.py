import pyarabic.ararby as arabic

class Simple:

    def simple_arab(self, text):

        text = arabic.strip_diacritics(text)
        text = arabic.strip_tatweel(text)
        text = arabic.normalize_hamza(p, method="tasheel")
        text = text.replace('\u0629', '\u0647')
        text = text.replace('\u0649', '\u064A')
        text = text.replace('\n', "")
        text = re.sub(r'\b\u0648', '', text)
        text = re.sub(r'\b\u0627\u0644(?![\u0644\u0647]|[\W])', ' ', text)
        text = re.sub(r'\u0621\b', '', text)
        text = re.sub(r'[^\w]', ' ', text)
        text = re.sub(r'\b\u0627u\0628(\u0627|\u0627\u0020|\u0648|\u0648\u0020|\u0649)', '\u0020\u0627u\0628\u0020', text)
        text = p.replace(' ', '')
        return text

    def simple_latin(self, text, simple_text):

        pass

    def simple_arab_compare(self, answer, model_answer):
       self.result  = (self.simple_arab(answer)== self.simple_arab(model_answer))
       return self.result


    def simple_latin_compare(self, answer, model_answer):
        pass