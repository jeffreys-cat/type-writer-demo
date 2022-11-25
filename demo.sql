CREATE EXCELLENT ANALYTICAL DATABASE(
    performance not null comment “ultimately
    difficulty not null comment“ease-to-use”
    timeliness not null comment“realtime”
    architecture not null comment“unifined”
)
ENGINE=opensource
PARTITION BY PHASE('DATE')
(
    PARTITION 'PAST' VALUES LESS THAN (“2017-xx-xx”)
    PARTITION 'INCUBATOR' VALUES LESS THAN (“2018-07-18”)
    PARTITION 'TOP-LEVEL PROJECT' VALUES LESS THAN (“2022-06-15”)
    PARTITION 'FUTURE' VALUES LESS THAN (“♾️”)
)
DISTRIBUTED BY xxx

