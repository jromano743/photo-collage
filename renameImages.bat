@echo off
setlocal enabledelayedexpansion

REM
cd /d "%~dp0\img"

REM
set count=1

REM
for %%f in (*.jpg *.png) do (
    if !count! leq 16 (
        REM
        if !count! lss 10 (
            set name=img0!count!
        ) else (
            set name=img!count!
        )

        REM
        ren "%%f" "!name!.jpg"

        REM
        set /a count+=1
    ) else (
        REM
        goto end
    )
)

:end
REM
endlocal
