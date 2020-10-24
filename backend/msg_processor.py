"""
index설명
0: greeting
1: positive
2: negative
3: intranet
4: sanghwangdo
5: KMA
6: atcismenu
7: hierarchy
8: ip
9: ipconfig
10: juyebi
11: TACS
12: s-drive
13: printer
14: toner
15: password
16: network
17: ess_sw
18: etc
19: vtc
20: pnumber
21: ipblocked
22: raws
23: devices
24: homepage
"""
import random
import pickle
import numpy
import pandas as pd
from konlpy.tag import Okt

class MsgProcessor:
    def __init__(self, i, c, s):
        self.index = i
        self.context = c
        self.step = s
        self.stemmer = Okt()

    def prep_message(self, msg):
        input_bag = []
        input_words = self.stemmer.pos(msg, norm=True, stem=True)
        words = pickle.load(open("./tinkerbell_ai/words.pkl", "rb"))

        processed_input = []

        for word in input_words:
            if not word[1] in ["Josa","Eomi","Punctuation"]:
                processed_input.append(word[0])

        for word in words:
            if word in processed_input:
                input_bag.append(1)
            else:
                input_bag.append(0)
        inputvar = pd.DataFrame([numpy.array(input_bag)], dtype=float, index=['input'])
        return inputvar

    def get_messasge(self):
        s = ""
        if self.index == -1:
            s = "질문을 이해하지 못했습니다. 조금 더 구체적으로 알려주세요"
        # greeting
        elif self.index == 0:
            answer_list = ["충성! 수고하십니다.", "안녕하세요", "안녕하십니까!"]
            s = random.choice(answer_list)
        # positive
        elif self.index == 1:
            answer_list = ["충성! 수고하하세요", "또 도와드릴게요", "바이바이"]
            s = random.choice(answer_list)
        # negative
        elif self.index == 2:
            # printer, toner
            if self.step == 1:
                if self.context == 13:
                    s = "프린터 및 스캐너 추가-> +클릭 -> 가장 하단에 원하는 프린터가 목록에 없습니다 클릭 -> TCP/IP주소로 추가 -> 프린터 ip를입력하여 추가합니다"
                elif self.context == 3:
                    s = "제어판\네트워크 및 인터넷\네트워크 연결 -> 네트워크아이콘 우클릭 속성 -> 인터넷 프로토콜 버전4를 클릭하여 게이트웨이와 dns가 올바른지 확인후 인트라넷이 되는지 확인해주세요"
                else:
                    s = "무엇이 안되는것인지 말씀해주세요"
            elif self.step == 2:
                if self.context == 13:
                    s = "프린터 속성에서 포트가 TCP/IP포트로 선택되어있는지 확인해보세요"
                elif self.context == 3:
                    s = "랜선도 뽑았다가 다시 끼워보고, 재부팅을 5회 반복해보고 인트라넷이 되는지 확인해주세요"
                else:
                    s = "사단CERT에서 정보보호병 문재현을 찾아주세요"
            elif self.step == 3:
                if self.context == 13:
                    s = "프린터 마스터 상병 XXX를 찾아주세요"
                else:
                    s = "사단CERT에서 정보보호병 문재현을 찾아주세요"

        # intranet
        elif self.index == 3:
            s = "랜선에 불이 들어왔는지 확인하고 인트라넷이 되는지 다시 확인해주세요"
        # sanghwangdo
        elif self.index == 4:
            s = "상황도가 안보일시 작업 관리자->서비스->apache tomcat을 재기동 하여주세요"
        # KMA
        elif self.index == 5:
            s = "단말기 아이피가 주서버와 일치하는지 그리고 랜선에 불이 들어오는지 확인해주세요"
        # atcismenu
        elif self.index == 6:
            s = "통합메뉴가 안보일시 작업 관리자->서비스->apache tomcat을 재기동 하여주세요"
        # hierarchy
        elif self.index == 7:
            s = "사단CERT에서 ATCIS병을 찾아주세요. 터널링 확인부탁후 문제가 없을시 체계반장(1234)로 문의하세요"
        # ip
        elif self.index == 8:
            s = "제어판\네트워크 및 인터넷\네트워크 연결 -> 네트워크아이콘 우클릭 속성 -> 인터넷 프로토콜 버전4를 더블클릭합니다"
        # ipconfig
        elif self.index == 9:
            s = "윈도우키 + R -> cmd -> ipconfig -> ipv4를 확인하시면 됩니다"
        # juyebi
        elif self.index == 10:
            s = "체계 부팅시 로그인전에 옵션-> ip변경에서 변경을 누르고 기다리시면 됩니다 그리고 다시 옵션에서 장비 초기등록을 완료해주세요"
        # TACS
        elif self.index == 11:
            s = "탁스 1.4 신규설치자용 다운-> 탁스 삭제프로그램 실행 -> 탁스 1.4 설치를 진행해주세요"
        # s-drive
        elif self.index == 12:
            s = "필수 보안프로그램인 s-drive가 제대로 실행되지 않을시 파일이 안보일 수 있습니다. 탁스 사용자 전환후 다시 로그인 해주세요"
        # printer
        elif self.index == 13:
            s = "프린터 랜선에 불이 들어오는지 확인하시고 다시 프린터가 되는지 확인해주세요"
        # toner
        elif self.index == 14:
            s = "프린터 토너는 체계소대 창고관리병 XXX를 찾아주세요"
        # password
        elif self.index == 15:
            s = "비밀번호는 보안상의 이유로 꼭 사단CERT로 직접 문의하시기 바랍니다"
        # network
        elif self.index == 16:
            s = "네트워크반/시험실(1234)로 문의해주시기 바랍니다"
        # ess_sw
        elif self.index == 17:
            s = "cwp페이지에서 필수 프로그램을 설치하라고 할경우 설치를 하고 설치했을경우에도 되지 않는경우 사단CERT로 문의합니다"
        # etc
        elif self.index == 18:
            s = "통신장비 작동이상 질문은 NCC 관제병에게 연락해주세요"
        # vtc
        elif self.index == 19:
            s = "vtc, 화상회의 문의는 앰프실(1234)로 문의 해주시기 바랍니다"
        # pnumber
        elif self.index == 20:
            s = "전화번호는 교환대(1234)나 https://xxdiv.army.mil/phonebook에서 찾아주시기 바랍니다"
        # ipblocked
        elif self.index == 21:
            s = "새로운 ip이거나/ 오래동안 사용하지 않으셨거나/ NAC장비 오류로인해 ip가 차단되었습니다. 사단CERT로 문의해주세요"
        # raws
        elif self.index == 22:
            s = "사단에서는 RAWS(고속상황전파체계)를 관리하지 않고 있습니다. 군단CERT에게 문의해주시기 바랍니다"
        # devices
        elif self.index == 23:
            s = "특정 프로그램이나 장비문의 같은 경우 간부의 동의가 필요합니다. 체계소대장 XXX에게 문의하세요"
        # homepage
        else:
            s = "홈페이지 관리는 사단CERT 정보보호병 문재현에게 문의하세요"

        return { "context": str(self.index), "msg": s }
