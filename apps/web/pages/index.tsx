import SyntaxHighlighter from 'react-syntax-highlighter';
import Typewriter from 'typewriter-effect';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Web() {
  return (
    <div>
      <Typewriter
        options={{
          delay: "natural",
        }}
        onInit={(typewriter) => {
          typewriter
            .changeDelay(10)
            .typeString(
              "<span class='code'><i class='primary-color'>CREATE</i> EXCELLENT ANALYTICAL DATABASE(</span>"
            )
            .typeString("<br/>")
            .typeString(
              "<span class='indent code'>performance <i class='blue'>not null</i> <i class='primary-color'>comment</i> “ultimately</span>"
            )
            .typeString("<br/>")
            .typeString(
              "<span class='indent code'>difficulty <i class='blue'>not null</i> <i class='primary-color'>comment</i>“ease-to-use”</span>"
            )
            .typeString("<br/>")
            .typeString(
              "<span class='indent code'>timeliness <i class='blue'>not null</i> <i class='primary-color'>comment</i>“realtime”</span>"
            )
            .typeString("<br/>")
            .typeString(
              "<span class='indent code'>architecture <i class='blue'>not null</i> <i class='primary-color'>comment</i>“unifined”</span>"
            )
            .typeString("<br/>")
            .typeString(")")
            .typeString("<br/>")
            .typeString("<i class='primary-color'>ENGINE</i>=opensource")
            .typeString("<br/>")
            .typeString(
              "<i class='primary-color'>PARTITION BY</i> PHASE('DATE')"
            )
            .typeString("<br/>")
            .typeString("(")
            .typeString("<br/>")
            .typeString(
              "<span class='indent code'><i class='primary-color'>PARTITION</i> 'PAST' VALUES LESS THAN (“2017-xx-xx”)</span>"
            )
            .typeString("<br/>")
            .typeString(
              "<span class='indent code'><i class='primary-color'>PARTITION</i> 'INCUBATOR' VALUES LESS THAN (“2018-07-18”)</span>"
            )
            .typeString("<br/>")
            .typeString(
              "<span class='indent code'><i class='primary-color'>PARTITION</i> 'TOP-LEVEL PROJECT' VALUES LESS THAN (“2022-06-15”)</span>"
            )
            .typeString("<br/>")
            .typeString(
              "<span class='indent code'><i class='primary-color'>PARTITION</i> 'FUTURE' VALUES LESS THAN (“♾️”)</span>"
            )
            .typeString("<br/>")
            .typeString(")")
            .typeString("<br/>")
            .typeString(
              "<span class='code'><i class='primary-color'>DISTRIBUTED BY</i>  xxx</span>"
            )
            .pauseFor(200)
            .typeString("<br/>")
            .typeString("...")
            .pauseFor(1000)
            .typeString("<br/>")
            .typeString(
              "<span class='success'>SELECT Future From DORIS_SUMMIT</span>"
            )

            // .callFunction(() => {
            //   console.log("String typed out!");
            // })
            // .pauseFor(1000)
            // .deleteAll()
            // .callFunction(() => {
            //   console.log("All strings were deleted");
            // })
            .start();
        }}
      />
      <style jsx global>
        {`
          .Typewriter {
            width: 100%;
            height: 100vh;
            background: #040f1e;
            color: white;
            padding: 20px;
            line-height: 30px;
          }
          .Typewriter__cursor {
            color: #fff;
            background: #fff;
            line-height: 1rem;
            margin-left: 0.4rem;
            padding: 0 0.05rem;
            animation: blink 0.7s infinite;
          }
          .indent {
            margin-left: 30px;
          }
          @keyframes blink {
            0% {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }
          i {
            font-style: normal;
            font-size: 14px;
          }
          .primary-color {
            color: #c045ff;
          }
          .blue {
            color: #00ebff;
          }
          .success {
            color: green;
          }
          body {
            margin: 0;
            font-smoothing: antialiased;
            // font-family: PingFang;
            font-size: 14px;
          }
        `}
      </style>
    </div>
  );
}
